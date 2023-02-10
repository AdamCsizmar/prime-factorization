import { primeFactors } from "../utils/math";
import numbersToSpell from "../utils/translateNumber";
import { useRef, useEffect } from "react";
import { hierarchy, select, tree, linkVertical } from "d3";
/* type Props = {
  number: number;
}; */

const PrimeFactorizationTree = (props /* : Props */) => {
  const data = primeFactors(props.number);
  let svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const treeLayout = tree().size([300, 500]);
    const root = hierarchy(data);
    console.log(props.number)
    console.log("root", root);
    console.log("links", root.links());

    treeLayout(root);

    const linkGenerator = linkVertical()
      .x((node) => node.x * 2)
      .y((node) => node.depth * 130 + 62);

    svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("z-index", "-1")
      .attr("stroke-width", 2)
      .attr("d", linkGenerator);

      
      svg
      .selectAll(".overlay")
      .data(root.descendants())
        .join("circle")
        .join("circle")
        .attr("class", "overlay")
        .attr("fill", "#1C1917")
        .attr("stroke-width", 2)
        .attr("r", 60)
        .attr("cx", (node) => node.x * 2)
        .attr("cy", (node) => node.depth * 130 + 62)
        
        svg
        .selectAll(".label")
        .data(root.descendants())
        .join("text")
        .attr("class", "label")
        .text((node) => node.data.name)
        .attr("text-anchor", "middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", 20)
        .attr("fill", "white")
        .attr("x", (node) => node.x * 2)
        .attr("y", (node) => node.depth * 130 + 62 + 5)
        .raise()
        
        svg
          .selectAll(".node")
          .data(root.descendants())
          .join("circle")
          .join("circle")
          .attr("class", "node")
          .attr("fill", "transparent")
          .attr("stroke", "white")
          .attr("stroke-width", 2)
          .attr("r", 60)
          .attr("cx", (node) => node.x * 2)
          .attr("cy", (node) => node.depth * 130 + 62)
          .raise();
        


    const tooltip = select("#tooltip");
    const spelledValue = select("#spelledValue");

    svg
      .selectAll(".node")
      .on("mouseover", (event, node) => {
        const mouseY = event.pageY;
        const mouseX = event.pageX;
        console.log(mouseX, mouseY);

        tooltip.style("opacity", 1);
        tooltip.style("position", "absolute")
        tooltip.style("top", `${event.pageY - 40}px`);
        tooltip.style("left", `${event.pageX + 10}px`);

        spelledValue.text(node.data.spelled);
      })
      .on("mousemove", (event) => {
        tooltip.style("top", `${event.pageY - 40}px`);
        tooltip.style("left", `${event.pageX + 10}px`);

      })
      .on("mouseleave", () => {
        tooltip.style("opacity", 0);
      });
  }, [data]);

  return (
    <div>
      <div id='tooltip' className='opacity-0'>
        <div className='text-black bg-white/80  w-fit px-5 py-2'>
          <span id='spelledValue' />
        </div>
      </div>
      <svg ref={svgRef} width='550' height='700'></svg>
    </div>
  );
};

export default PrimeFactorizationTree;
