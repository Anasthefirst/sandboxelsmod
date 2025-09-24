elements.sand_exploder = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            changePixel(pixel, "explosion");
        }
    },
    category: "tools",
}
