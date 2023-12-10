import {errorHandler} from "../helper/errorHandler.js";
import User from "../models/user.model.js";

export const getUser = async (req, res, next) => {
    try {

        const user = await User.findById(req.user.id);

        if (!user) return next(errorHandler(404, 'User not found!'));

        const { password: pass, ...rest } = user._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const updateUser = (req, res, next) => {

}
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.user.id)
        res.clearCookie('access_token')
        res.status(200).json('User has been deleted')
    } catch (error) {
        return errorHandler(400, error)
    }
}