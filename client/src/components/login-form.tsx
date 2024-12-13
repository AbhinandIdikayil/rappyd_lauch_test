
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/store/action"
import { AppDispatch } from "@/store/store"
import { LoginFormSchema } from "@/utils/validation/login_validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"

export function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  type formType = z.infer<typeof LoginFormSchema>;
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<formType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  async function onSubmit(data: formType) {
    try {
      console.log(data);
      await dispatch(login(data)).unwrap()
      return navigate('/');
    } catch (error: any) {
      if (error?.message?.includes('password')) {
        setError('password', { message: error.message })
      }
      if (error?.message?.includes('User')) {
        setError('email', { message: error.message })
      }
      console.log(error);
    }
  }
  return (
    <Card className="mx-auto max-w-sm bg-background">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email
              {
                errors?.email?.message && (
                  <span className="text-red-500 text-sm"> ( {errors?.email?.message} )</span>
                )
              }
            </Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">
                Password
                {
                  errors?.password?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.password?.message} )</span>
                  )
                }
              </Label>
            </div>
            <Input
              id="password"
              {...register('password')}
              type="password" />
          </div>
          {
            isSubmitting ? (
              <button className="button-4 w-full flex items-center justify-center" role="button">
                <LoaderIcon className='animate-spin' width={35} height={20} />
              </button>
            ) : (
              <Button type="submit" className="w-full">
                Login
              </Button>
            )
          }

        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
