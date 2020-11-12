import { formatDate, getSeasonByMonth } from "../src/utils/helpers";

const march7year2011 = new Date(1299448800000);
const jan31year2020 = new Date(1580421600000);
const dec1year1960 = new Date(-286686000000);

test("formats date to X Month FullYear", () => {
    expect(formatDate(march7year2011)).toBe("7 March 2011");
    expect(formatDate(jan31year2020)).toBe("31 January 2020");
    expect(formatDate(dec1year1960)).toBe("1 December 1960");
});

test("get season by month index", () => {
    expect(getSeasonByMonth(0)).toBe("winter");
    expect(getSeasonByMonth(5)).toBe("summer");
    expect(getSeasonByMonth(11)).toBe("winter");
});
