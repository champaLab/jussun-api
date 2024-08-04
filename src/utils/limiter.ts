import { Request, Response } from 'express'
import rateLimit from 'express-rate-limit'

const rateLimitExceededHandler = (req: Request, res: Response) => {
    res.status(429).json({
        status: 'error',
        message: 'Too many requests, please try again later.'
    })
}

export const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes window
    max: 10, // Limit each IP to 20 requests per windowMs
    standardHeaders: 'draft-7', // Use the combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: rateLimitExceededHandler, // Custom handler for rate limit exceeded
    skip: (req, res) => {
        // Skip rate limiting for certain requests, e.g., internal API calls
        return req.ip === '127.0.0.1' // Example: skip local requests
    }
})
