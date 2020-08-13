import React from "react";
import * as rtl from "@testing-library/react";

import App from "./App";

  test("renders app", async ()=>{
    const wrapper = rtl.render(<App/>);
    const firstnameInput = wrapper.getByPlaceholderText('Edd');
    const submitButton = wrapper.getByRole("button");

    await rtl.act(async ()=>{
      rtl.fireEvent.change(firstnameInput, {target: {value: "Samantha"}});
      rtl.fireEvent.submit(submitButton);
    });

    const firstnameError = wrapper.queryByTestId("firstname-error");

    expect(firstnameError).not.toBeInTheDocument();
  });


