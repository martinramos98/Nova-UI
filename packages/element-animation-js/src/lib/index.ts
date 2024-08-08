import { flyAnimation, fadeAnimation } from './PresettedAnimations.js';
import {
	type ElementAnimationParams,
	ElementAnimation,
	type BasicAnimation,
	animationsConfigs,
	defaultKeyframesAnimations,
	easing
} from './Animation.js';
import {
	SequencedAnimation,
	type SequencedAnimationElement,
	SequencedChildrenAnimation,
	SequencedSiblingAnimation
} from './SequencedAnimation.js';
import {
	ParallelAnimation,
	type ParallelAnimationOptions,
	type ParallelElementParam
} from './ParallelAnimation.js';
// ---
export {
	ElementAnimation,
	easing,
	defaultKeyframesAnimations,
	type ElementAnimationParams,
	type BasicAnimation,
	SequencedAnimation,
	type SequencedAnimationElement,
	animationsConfigs,
	SequencedChildrenAnimation,
	SequencedSiblingAnimation,
	ParallelAnimation,
	type ParallelAnimationOptions,
	type ParallelElementParam,
	fadeAnimation,
	flyAnimation
};
