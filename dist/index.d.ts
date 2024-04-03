import { z } from 'zod';
export declare const signUpInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type SignUpParams = z.infer<typeof signUpInput>;
export declare const hashedPassword: (password: string) => Promise<string>;
export declare const validatePassword: (password: string, hashedPassword: string) => Promise<boolean>;
