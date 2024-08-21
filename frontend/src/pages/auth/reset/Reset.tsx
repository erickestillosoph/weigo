import Loader from "@/components/shared/loader/LoaderComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePasswordReset } from "@/hooks/auth/usePasswordReset";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
function ResetEmail() {
    const navigate = useNavigate();
    const {
        handleSubmitForm,
        onSubmit: { isPending, mutateAsync },
        register,
    } = usePasswordReset();
    const setIsAuthState = useSetUseIsAuthState();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm(async () => {
            try {
                await mutateAsync();
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
                <Loader isLoading={isPending}></Loader>
                {!isPending && (
                    <div className="w-[30%] ">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6"
                        >
                            <div className="">
                                <h1 className="text-4xl">
                                    Reset your password!
                                </h1>
                                <p>
                                    Fill out the email you want to reset the
                                    password
                                </p>
                            </div>
                            <div className="">
                                <Input
                                    {...register("email")}
                                    placeholder="Email Adress"
                                ></Input>
                            </div>

                            <div className="">
                                <Button className="w-full" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResetEmail;
