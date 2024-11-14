"use client"
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from 'next/link';


// Define the schema with Zod
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});


export default function LoginPage() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof loginSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        alert(`Hello ${values.email}`);
    }
    return (
        <div className="flex items-center justify-center ">
            <Card className="w-full max-w-md p-4 shadow-md mt-[10vh]">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-primary">
                        Sign in to your account
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type={'password'} placeholder="Password..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                        </form>
                    </Form>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Forgot your password?{' '}
                            <a href="#" className="text-indigo-600 hover:underline">Reset it here</a>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Don&apos;t have an account?{' '}
                            <Link href="signUp" className="text-indigo-600 hover:underline">Sign up</Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
