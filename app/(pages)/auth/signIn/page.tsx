"use client"
import React, { useState } from 'react';
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
import {signIn} from 'next-auth/react';
import Loader from '@/components/shared/Loader';
import { useRouter } from 'next/navigation';
import {useSession} from 'next-auth/react';
// Define the schema with Zod
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});


export default function LoginPage() {
    const {status} = useSession();
    const [showSpinner, setShowSpinner] = useState(false);
    const router = useRouter();

    if(status=="authenticated"){
        router.push("/");
    }
    // 1. Define your form.
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof loginSchema>)=> {
        setShowSpinner(true);
        const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        });

        if (result?.error) {
        alert("Invalid email or password");
        } else {
        router.push("/");
        // Optionally redirect here or show success message
        }
        setShowSpinner(false);
    }
    return (
        <div className="flex items-center justify-center ">
            {
                showSpinner?
                <div className="w-full h-screen bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] flex justify-center items-center absolute z-20">
                    <Loader />
                </div>
                :null
            }
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
                    <button onClick={() => signIn("google")}>Sign in with Google</button>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Forgot your password?{' '}
                            <a href="#" className="text-indigo-600 hover:underline">Reset it here</a>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Don&apos;t have an account?{' '}
                            <Link href="/auth/signUp" className="text-indigo-600 hover:underline">Sign up</Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
