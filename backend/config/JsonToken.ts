import jwt from 'jsonwebtoken';

export const jsonWebToken =  (username: string) => {
    return jwt.sign({ username }, "rohitkumarisgreatperosn");
}
