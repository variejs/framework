import LoginViews from "@views/LoginViews";
import RouterInterface from "../../../routing/RouterInterface";

export default function($router: RouterInterface) {
  $router.area(LoginViews.AuthArea).group(() => {
    $router.route("login", LoginViews.Login);
    $router.route("register", LoginViews.Register);
    $router.route("forgot-password", LoginViews.Register);
    $router.route("reset-password", LoginViews.ResetPassword);
  });
}
