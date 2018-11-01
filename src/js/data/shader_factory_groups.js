import ColourShader from "shaders/material_shaders/colour_shader/colour.shader";
import RandomColourShader from "shaders/material_shaders/random_colour/random_colour.shader";
import RayMarchBlobShader from "shaders/material_shaders/raymarch_blob/raymarch_blob.shader";
import SquirmyWormyShader from "shaders/material_shaders/squirmy_wormy/squirmy_wormy.shader";
import LiquidMetalShader from "shaders/material_shaders/liquid_metal/liquid_metal.shader";

import ToothShader from "shaders/material_shaders/tooth_shader/tooth.shader";

const SHADER_FACTORY_GROUPS = {
	DEFAULT : [ColourShader, RandomColourShader, RayMarchBlobShader],
	// DEFAULT : [LiquidMetalShader],
	HEAD : [ColourShader, RandomColourShader, RayMarchBlobShader, LiquidMetalShader],
	// HEAD : [SquirmyWormyShader],
	TEETH : [ToothShader],
	EYEBALL : [ColourShader, RandomColourShader, SquirmyWormyShader]
};

export default SHADER_FACTORY_GROUPS;