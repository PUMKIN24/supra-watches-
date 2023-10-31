import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import orderModel from "../models/orderModel.js"
import JWT from "jsonwebtoken"

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body
        //validations
        if (!name) {
            return res.send({ message: "Name is required" })
        }
        if (!email) {
            return res.send({ message: "Email is required" })
        }
        if (!password) {
            return res.send({ message: "Password is required" })
        }
        if (!phone) {
            return res.send({ message: "Phone Number is required" })
        }
        if (!address) {
            return res.send({ message: "Address is required" })
        } if (!answer) {
            return res.send({ message: "Answer is required" })
        }


        //check user
        const existingUser = await userModel.findOne({ email })
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already registered please Login"
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword, answer }).save()
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid Email or password"
            })
        }
        //check user exist
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email not registered"
            })
        }
        //compare password
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Incorrect password",
            })
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                role: user.role,
            },
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}

export const testController = (req, res) => {
    res.send('protected routes')
}

export const forgotPassword = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body
        if (!email) {
            res.status(400).send({ message: "Email is required" })
        }
        if (!answer) {
            res.status(400).send({ message: "answer is required" })
        }
        if (!newPassword) {
            res.status(400).send({ message: "newPassword is required" })
        }
        //check email and answer
        const user = await userModel.findOne({ email, answer });
        //validation
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "Invalid Email or answer"
            })
        }
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: true,
            message: "Password updated successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}

//update profile
export const updateProfileController = async (req, res) => {
    try {
        const { name, email, password, address, phone } = req.body;
        const user = await userModel.findById(req.user._id);
        //password
        if (password && password.length < 5) {
            return res.json({ error: "Password should contain minimum of five characters" });
        }
        const hashedPassword = password ? await hashPassword(password) : undefined;
        const updatedUser = await userModel.findByIdAndUpdate(
            req.user._id,
            {
                name: name || user.name,
                password: hashedPassword || user.password,
                phone: phone || user.phone,
                address: address || user.address,
            },
            { new: true }
        );
        res.status(200).send({
            success: true,
            message: "Profile Updated SUccessfully",
            updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error WHile Update profile",
            error,
        });
    }
};

//orders
export const getOrdersController = async (req, res) => {
    try {
        const orders = await orderModel.find({ buyer: req.user._id }).populate('products', '-photo').populate('buyer', 'name')
        res.json(orders)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while getting orders",
            error
        })
    }
}

//all orders
export const getAllOrdersController = async (req, res) => {
    try {
        const orders = await orderModel.find({}).populate('products', '-photo').populate('buyer', 'name').sort({
            createdAt: '-1'
        })
        res.json(orders)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while getting orders",
            error
        })
    }
}
//order status
export const orderStatusController = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        const orders = await orderModel.findByIdAndUpdate(
            orderId,
            { status },
            { new: true }
        );
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error While Updating Order",
            error,
        });
    }
};