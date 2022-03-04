import { shallowMount } from "@vue/test-utils";
import Weather from "@/components/weather/index.vue";

describe("Title component", () => {
  test("Teste 01", () => {
    const wrapper = shallowMount(Weather);

    expect(wrapper.contains("div")).toBe(true);
  });
});
