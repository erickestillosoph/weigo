import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { useLogin } from "@/hooks/auth/useLogin";

function ResendLink() {
    const navigate = useNavigate();
    const { handleSubmitForm, onSubmit } = useLogin();

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
                <div className="w-[30%]">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <div className="">
                            <h1 className="text-4xl">Verify your Email!</h1>
                            <p>Theres an email in your inbox!</p>
                        </div>

                        <div className="">
                            <Button className="w-full" type="submit">
                                Resend New Verification Link
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResendLink;
