import * as bcrypt from 'bcrypt';

export const EncryptPass = async (password: string): Promise<String | Error> => {
    try {
        if (!password) {
            return new Error('password is required');
        }

        return await bcrypt.hash(password, parseInt(process.env.CRYPT_SALT || '10'));
    } catch (err) {
        return new Error(err);
    }
};

export const ComparePass = async (password: string, bdPassword: string): Promise<Boolean | Error> => {
    try {
        if (!password || !bdPassword) {
            return new Error('password is required');
        }

        return await bcrypt.compare(password, bdPassword);
    } catch (err) {
        return new Error(err);
    }
};
