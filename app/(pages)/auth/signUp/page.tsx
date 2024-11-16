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
import { registerUserSchema } from '@/lib/schema/RegisterUserSchema';
import { IApiRequest } from '@/lib/interfaces/IApiRequest';
import { PerformApiCall } from '@/lib/utils';
import { routes } from '@/lib/ApiRoutes';


export default function SignUpPage() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof registerUserSchema>>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            confirmPassword:"",
            phoneNumber:"",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        const request: IApiRequest = {
            url: routes.register,
            method:'POST',
            body: JSON.stringify(values),
        }
        const response = await PerformApiCall(request);
        if(response.success){
            alert('Registered Successfully');
        }
        else{
            alert(response.message);
        }
    }
    return (
        <div className="flex items-center justify-center ">
            <Card className="w-full max-w-md p-4 shadow-md mt-[10vh]">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-primary">
                        Sign up to your account
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Contact Number..." {...field} />
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
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type={'password'} placeholder="Confirm Password..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">
                                Sign Up
                            </Button>
                        </form>
                    </Form>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600 mt-2">
                            Already have an account?{' '}
                            <Link href="auth/signIn" className="text-indigo-600 hover:underline">Sign in</Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
