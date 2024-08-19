import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePasswordResetForm } from "@/hooks/auth/usePasswordResetForm";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
function ResetForm() {
    const navigate = useNavigate();
    const { handleSubmitForm, onSubmit, register } = usePasswordResetForm();
    const setIsAuthState = useSetUseIsAuthState();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm(async () => {
            try {
                await onSubmit.mutateAsync();
            } catch (e) {
                console.error(e);
            }
        })();
    };
    return (
        <div>
            <div className="w-full flex flex-row gap-2 p-8">
                <HomeIcon color="black" />
                <Label onClick={handleHome}>Home</Label>
            </div>
            <div className="flex justify-center items-center h-[80vh]">
                <div className="w-[30%] ">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <div className="">
                            <h1 className="text-4xl">Enter new password!</h1>
                            <p>Enter new password</p>
                        </div>
                        <div className="">
                            <Input
                                {...register("password")}
                                placeholder="Password"
                            ></Input>
                        </div>
                        {/* <div className="">
                            <Input
                                {...register("password_confirmation")}
                                placeholder="Password Confirmation"
                            ></Input>
                        </div> */}

                        <div className="">
                            <Button className="w-full" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetForm;
