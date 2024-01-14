import { screen, render, within } from "@testing-library/react";
import {OverviewSlide} from "./overview-slide";
import overviewList from "../../data/overview.json";

const renderOverview = () => {
    const onOverviewSubmit = jest.fn()
    return render(<OverviewSlide {...overviewList} onOverviewSubmit={onOverviewSubmit} />)
}

test("should render overview component without fail", async () => {
    renderOverview()
    expect(await screen.findByText("An overview of your answers")).toBeVisible();
});

test("should render submit button", async () => {
    renderOverview()
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).toBeVisible();
});
 