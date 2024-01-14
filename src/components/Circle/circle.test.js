import { screen, render, within } from "@testing-library/react";
import {Circle} from ".";
import slide from "../../data/slider.json";

const renderCircle = (slides=[], active= 0) => {
    const setActive = jest.fn()
    return render(<Circle slides={slides} active={active} setActive={setActive} />)
}

test("should render circle snapshot", async () => {
    const circle = renderCircle()
    expect(circle).toMatchSnapshot();
});

test("it should render circle list", async () => {
    renderCircle(slide,2);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
});