
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import './signup.css'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SignupFormSchema } from "@/utils/validation/signup_validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { IRole } from "@/constants/enum"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/store/store"
import { Register } from "@/store/action"
import { LoaderIcon } from "lucide-react"

function SignupForm() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  type formType = z.infer<typeof SignupFormSchema>
  const { register, handleSubmit, setError, setValue, formState: { errors, isSubmitting } } = useForm<formType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  async function onSubmit(data: formType) {
    try {
      console.log(data)
      await dispatch(Register(data)).unwrap()
      return navigate('/')
    } catch (error:any) {
      console.log(error);
      if (error?.message?.includes('password')) {
        console.log('asfsdfpas')

        setError('password', { message: error.message })
      }
      if (error?.message?.includes('exist')) {
        console.log('asfsdf')
        setError('name', { message: error.message })
      }
    }
  }
  console.log(errors)
  return (
    <Card className="mx-auto max-w-sm bg-background">
      <CardHeader>
        <CardTitle className="text-2xl"> Signup </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">

          {/* //! FOR NAME */}
          <div className="grid gap-2">
            <Label htmlFor="email">
              Username
              {
                errors?.name?.message && (
                  <span className="text-red-500 text-sm"> ( {errors?.name?.message} )</span>
                )
              }
            </Label>
            <Input
              {...register('name')}
              id="email"
              type="text"
              placeholder="john"
            />
          </div>

          {/* //! FOR EMAIL */}
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
              id="email"
              {...register('email')}
              type="email"
              placeholder="m@example.com"
            />
          </div>

          {/* //! FOR ROLE */}
          {
            errors?.role?.message && (
              <span className="text-red-500 text-sm"> ( {errors?.role?.message} )</span>
            )
          }
          <div className="flex gap-2">
            <div className="radio-wrapper-4">
              <input id="example-4"
                type="radio"
                onClick={() => setValue('role', IRole.Teacher)}
                value={IRole.Teacher}
                name="radio-examples"
              />
              <label htmlFor="example-4 text-foreground"> Teacher </label>
            </div>
            <div className="radio-wrapper-4">
              <input
                id="example-4"
                type="radio"
                onClick={() => setValue('role', IRole.Student)}
                value={IRole.Student}
                name="radio-examples"
              />
              <label htmlFor="example-4"> Student </label>
            </div>
          </div>

          {/* //! FOR PASSWORD */}
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
            <Input id="password" type="password" {...register('password')} />
          </div>
          {
            isSubmitting ? (
              <button className="button-4 w-full flex items-center justify-center" role="button">
                <LoaderIcon className='animate-spin' width={35} height={20} />
              </button>
            ) : (
              <Button type="submit" className="w-full">
                Signup
              </Button>
            )
          }

        </form>
        <div className="mt-4 text-center text-sm">
          have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignupForm