import { render, fireEvent } from "@testing-library/react";
import ZoomImageScroll from "../ZoomImageScroll";

test("ZoomImageScroll component test", () => {
  const { getByTestId } = render(<ZoomImageScroll />);
  const image = getByTestId("zoom-image");

  // Initial state assertions
  expect(image.style.transform).toBe("scale(1)");

  // Simulate scroll event to zoom in
  fireEvent.scroll(window, { target: { scrollY: 100 } });
  expect(image.style.transform).toBe("scale(1.5)");

  // Simulate scroll event to zoom out
  fireEvent.scroll(window, { target: { scrollY: 0 } });
  expect(image.style.transform).toBe("scale(1)");
});
