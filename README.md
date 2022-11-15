1. Create a LWC which extends OmniscriptBaseMixin and OmniscriptStep.
2. Update the runtimeNamespace to vlocity_cmt and isExposted to true in meta xml of LWC.(Refer customStep meta xml).
3. Override the Step LWC.(Go to setup of OS > Element Type to LWC Mapping > Element Type = "Step", LWC = "customStep") - Refer screenshot 1
4. Hide step buttons.(Make all the step button width to 0) - Refer screenshot 2.
5. Provide button labels.( Leave empty whereever not required, e.g- for the first step leave empty for "prev" and for last step leave empty for "next" label) - Refer Screenshot 3
6. Activate your OS to see the changes.
7. I've added CANCEL button in the html, you may remove it if not required for your use case.
