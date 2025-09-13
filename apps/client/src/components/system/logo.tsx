import { Bitcount_Grid_Double } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bitcountGridDouble = Bitcount_Grid_Double({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={cn("text-2xl font-bold", bitcountGridDouble.className)}
    >
      RT
    </Link>
  );
}
