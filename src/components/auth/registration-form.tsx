"use client";

import { z } from "zod";

import { FcGoogle } from "react-icons/fc";
import { IoCaretForward } from "react-icons/io5";
import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../ui/form";
import { useState } from "react";
import { Link } from "react-router-dom";



export const RegisterSchema = z.object({
    firstName: z.string().min(1, {
        message: "First Name is required",
    }),
    lastName: z.string().min(1, {
        message: "Last Name is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(8, {
        message: "Password is required",
    })
});

type FormValues = z.input<typeof RegisterSchema>;



const RegInfo = [
    {
        label: "First Name",
        name: "firstName",
        type: "text"
    },
    {
        label: "Last Name",
        name: "lastName",
        type: "text"
    },
    {
        label: "Email",
        name: "email",
        type: "email"
    },
    {
        label: "Password",
        name: "password",
        type: "password"
    },
]

export const RegistrationForm = () => {
    const [isPending, setIsPending] = useState(false);

    const onClick = () => { }

    const form = useForm<FormValues>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    const onClickAuth = (provider: "google") => { }

    return (
        <div className="flex flex-1 items-center justify-center">
            <div className=" text-center w-full flex justify-center items-center max-w-lg mx-2 rounded-md p-4">
                <div className="flex flex-col gap-y-2 w-full">
                    <h2 className="font-bold text-xl">
                        Create Account
                    </h2>
                    <p className="text-sm">
                        Welcome back! Please register to continue
                    </p>

                    <div className="py-5 space-y-3">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                {RegInfo.map(({ name, label, type }) => (
                                    <FormField
                                        key={label}
                                        name={name as any}
                                        control={form.control}
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-y-1">
                                                <FormLabel className="text-left">
                                                    {label}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        height={12}
                                                        disabled={isPending}
                                                        placeholder=""
                                                        {...field}
                                                        type={type}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                ))}
                                <Button
                                    type="submit"
                                    disabled={!form.formState.isValid || isPending}
                                    className="bg-blue-500 w-full text-white gap-x-2 flex items-center"
                                >
                                    {isPending ?
                                        <Loader2 className="size-4 animate-spin" /> :
                                        <>
                                            <p>Continue</p>
                                            < IoCaretForward className="size-3" />
                                        </>
                                    }

                                </Button>
                            </form>
                        </Form>
                        <div className="flex flex-col w-full space-y-2">
                            <Button
                                variant="outline"
                                disabled={isPending}
                                onClick={() => onClickAuth("google")}
                                className="flex items-center justify-center w-full border-[1px] p-1.5 rounded-lg gap-x-3 cursor-pointer mt-3"
                            >
                                <FcGoogle className="" />
                                <p className="text-sm">Sign up with Google</p>
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-x-3 text-sm pt-2 font-medium">
                            <p className="text-gray-400">
                                Don&apos;t have an account?
                            </p>
                            <Link
                                to="/sign-in"
                                className="cursor-pointer"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
