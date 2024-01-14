import { screen, render, within } from "@testing-library/react";
import Loader from ".";

const renderLoader = () => {
    return render(<Loader  />)
}

test("should render nullloader snapshot", async () => {
    const nullloader = renderLoader()
    expect(nullloader).toMatchSnapshot();
});

test("it should nullloader component", async () => {
    const { container } = renderLoader();
    expect(container.getElementsByClassName("nullloader")).toHaveLength(1);
});