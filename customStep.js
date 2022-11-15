import { LightningElement } from 'lwc';
import OmniscriptStep from 'vlocity_cmt/omniscriptStep';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';
import tmpl from './customStep.html'
export default class CustomStep extends OmniscriptBaseMixin(OmniscriptStep) {

    get nextLabel(){
        return !this.scriptHeaderDef?.hasInvalidElements && this.jsonDef?.propSetMap.nextLabel;
    }
    get prevLabel(){
        return this.jsonDef?.propSetMap.previousLabel;
    }

    render(){
        return tmpl;
    }

    handleCancel(){
        //custom code to handle cancel
    }

    handlePrev(){
        this.omniPrevStep();
    }

    handleNext(){
        this.omniNextStep();
    }

}