 import * as z from "zod"

 export   const schema = z.object({
      name: z.string().nonempty('Name is required').min(3).max(100),
      email: z.string().email('Invalid email address'),
      password: z.string().min(6, 'Password must be at least 6 characters'),
      rePassword: z.string().min(6, 'Please confirm your password'),
      phone: z.string().regex(/^01[0125][0-9]{8}$/, 'Invalid phone number')
    }).refine(function (data) {
      return data.password === data.rePassword;
    }, {path: ['rePassword'], message: "Passwords do not match"} );