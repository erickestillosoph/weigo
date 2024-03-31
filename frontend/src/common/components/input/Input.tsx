import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel() {
    return (
        <div className="grid w-full max-w-sm  gap-1.5">
            <Label htmlFor="text" className="text-left">
                Label here
            </Label>
            <Input type="text" id="text" placeholder="Enter text" />
        </div>
    );
}
