import { Counter } from "#@/index/components/Counter";
import Button from "@mui/material/Button";
import { Link } from '#@/index/renderer/Link';

export { Page };

function Page() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Button onClick={handleClick}>Navigate</Button>
      <Link href="/app/profile"> Profile </Link>
    </>
  );
}
