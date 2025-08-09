# Look Up Tables (LUTs)

> <Badge type="danger" text="Outdated"/> <Badge type="warning" text="Under Review"/>

A **Look Up Table (LUT)** is a pre-made list of values used to quickly find results instead of calculating them from scratch. In simple terms: instead of running a complex formula every time, the computer just looks up the answer in a table.

This is often much faster, especially for repeated calculations or real-time applications.

## Usecases

### Photo & Video

In photography and video, LUTs are used to apply a consistent color style or “look” to footage.
Think of it as a **preset** that instantly changes tones, contrast, and color balance. Similar to a filter, but more precise.

You can find free and paid LUT packs by searching online for [`color grading luts`](https://www.google.com/search?q=color+grading+luts).

### Force Feedback

In sim racing, LUTs can also improve **Force Feedback (FFB)**.
For wheelbases, an FFB LUT maps the *actual* forces your wheel produces to the *intended* forces from the game, correcting for hardware quirks and making steering feel more accurate.

For *Assetto Corsa*, the most common tool is [`LUT Generator for AC`](https://www.overtake.gg/downloads/lut-generator-for-ac.9740/) by **Akis**, which sends test forces to your wheel, measures its response, and generates a custom LUT.

## Details

A LUT is usually stored as an array or table of precomputed results.
The process is called **direct addressing**, where instead of running the function, the program uses the input as an index to instantly retrieve the output.

This method trades **memory** for **speed**:

* **Pros:** Much faster than computing values in real time, especially for complex math or input/output operations.
* **Cons:** Requires storage space for the table and is fixed to the precomputed values.

In performance-critical environments like real-time graphics or physics simulation, LUTs are often used for functions such as trigonometry, gamma correction, and force mapping.