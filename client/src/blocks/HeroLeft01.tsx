/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "../components/TwoSidedLayout";
import { Link as RouterLink } from "react-router-dom";

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" sx={{ fontSize: "lg", fontWeight: "lg" }}>
        Invoice Nest
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontWeight: "xl",
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
        A large headlinerer about our product features & services
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: "lg", lineHeight: "lg" }}
      >
        A descriptive secondary text placeholder. Use it to explain your
        business offer better.
      </Typography>
      <Button size="lg" endDecorator={<ArrowForward fontSize="large" />}>
        <RouterLink style={{ color: "#fff" }} to="/register">
          Get Started
        </RouterLink>
      </Button>
      <Typography>
        Already a member?{" "}
        <Link component={RouterLink} sx={{ fontWeight: "lg" }} to="/sign-in">
          Sign in
        </Link>
      </Typography>
    </TwoSidedLayout>
  );
}
