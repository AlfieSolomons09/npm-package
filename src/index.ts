import {z} from 'zod';
import bcrypt from 'bcrypt';
export const signUpInput = z.object({
    username: z.string().email(),
    password: z.string().min(6).max(20)
})

export type SignUpParams = z.infer<typeof signUpInput>;

export const hashedPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

export const validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
}