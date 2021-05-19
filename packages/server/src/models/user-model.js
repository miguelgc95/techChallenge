import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'The email is required'],
            trim: true,
            unique: true,
            validate: {
                validator: value => validator.isEmail(value),
                message: props => `The email ${props.value} is not valid`,
            },
        },
        memes: [
            {
                type: String,
                ref: 'song',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('user', UserSchema);

export default User;
