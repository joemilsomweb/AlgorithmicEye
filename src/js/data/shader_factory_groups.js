import ColourShader from "shaders/material_shaders/colour_shader/colour.shader";
import RandomColourShader from "shaders/material_shaders/random_colour/random_colour.shader";
import RayMarchBlobShader from "shaders/material_shaders/raymarch_blob/raymarch_blob.shader";

import ToothShader from "shaders/material_shaders/tooth_shader/tooth.shader";

const SHADER_FACTORY_GROUPS = {
	DEFAULT : [ColourShader, RandomColourShader, RayMarchBlobShader],
	TEETH : [ToothShader],
	EYEBALL : [ColourShader, RandomColourShader]
};

export default SHADER_FACTORY_GROUPS;