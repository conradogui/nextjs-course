import Link from "next/link.js";

export default function MealsPage() {
    return (
        <main>
            <h1>Meals Page</h1>
            <Link href="/meals/share">share</Link>
            <Link href="/meals/something">something</Link>
        </main>
    )
}