/**
 * Calculates scaled dimensions to ensure both width and height are below 750
 * while maintaining the original aspect ratio
 *
 * @param width Original width
 * @param height Original height
 * @returns Object containing scaled width and height
 */
export const calculateScaledDimensions = (width: number, height: number) => {
  let scaledWidth = Number(width);
  let scaledHeight = Number(height);
  const aspectRatio = scaledWidth / scaledHeight;

  // If either dimension exceeds 750, scale both proportionally
  if (scaledWidth >= 750 || scaledHeight >= 750) {
    if (scaledWidth > scaledHeight) {
      // Width is the larger dimension
      scaledWidth = 750;
      scaledHeight = scaledWidth / aspectRatio;
    } else if (scaledHeight > scaledWidth) {
      // Height is the larger dimension
      scaledHeight = 750;
      scaledWidth = scaledHeight * aspectRatio;
    } else {
      // Both dimensions are equal and exceed the maximum
      scaledWidth = 750;
      scaledHeight = 750;
    }
  } else if (scaledWidth <= 500 || scaledHeight <= 500) {
    if (scaledWidth < scaledHeight) {
      // Width is the smaller dimension
      scaledWidth = 500;
      scaledHeight = scaledWidth / aspectRatio;
    } else if (scaledHeight < scaledWidth) {
      // Height is the smaller dimension
      scaledHeight = 500;
      scaledWidth = scaledHeight * aspectRatio;
    } else {
      // Both dimensions are equal and below the minimum
      scaledWidth = 500;
      scaledHeight = 500;
    }
  }

  return { scaledWidth, scaledHeight };
};
