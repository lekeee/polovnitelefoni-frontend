import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Button } from "@base-ui/react";
import { EllipsisVertical } from "lucide-react";

export default function AdOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button />}>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:text-gray-500">
            Pogresna kategorija
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-gray-500">
            Oglas je dupliran
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-gray-500">
            Neprikladan sadrzaj
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
