import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const setup = (component: Parameters<typeof render>[0]) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};
