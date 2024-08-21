import { Button } from "@/components/ui/button";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { useResendLink } from "@/hooks/auth/useResendLink";
import { Input } from "@/components/ui/input";
import Loader from "@/components/shared/loader/LoaderComponent";

function ResendLink() {
    const navigate = useNavigate();
    const {
        handleSubmitForm,
        register,
        onSubmit: { mutateAsync, isPending },
    } = useResendLink();

    const setIsAuthState = useSetUseIsAuthState();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm(async () => {
            try {
                await mutateAsync();
                setIsAuthState({ authentication: true });
                navigate("/");
            } catch (e) {
                console.error(e);
            }
        })();
    };

    return (
        <div className="relative h-[70vh]">
            <Loader isLoading={isPending} />
            {!isPending && (
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
                            <div>
                                <Input
                                    {...register("email")}
                                    placeholder="Email Adress"
                                ></Input>
                            </div>
                            <div className="">
                                <Button className="w-full" type="submit">
                                    Resend New Verification Link
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResendLink;
