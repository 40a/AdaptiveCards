import { HostContainer} from "./host-container"; 
import * as Adaptive from "adaptive-cards"; 
import * as Utils from "../utils"; 
 
export class BingContainer extends HostContainer { 
    static backgroundColor: string = "#fff"; 
 
    private _width: number; 
 
    constructor(width: number, styleSheet: string) { 
        super(styleSheet); 
 
        this._width = width; 
    } 
 
    protected renderContainer(renderedCard: HTMLElement): HTMLElement { 
        var element = document.createElement("div"); 
        element.style.width = this._width + "px"; 
        element.style.backgroundColor = BingContainer.backgroundColor; 
        element.style.overflow = "hidden"; 
 
        renderedCard.style.height = "100%"; 
 
        element.appendChild(renderedCard); 
 
        return element; 
    } 
 
    public getHostConfig(): Adaptive.IHostConfig { 
        return { 
            supportsInteractivity: true, 
            strongSeparation: { 
                spacing: 20, 
                lineThickness: 1, 
                lineColor: "#EEEEEE" 
            }, 
            fontFamily: "Segoe UI", 
            fontSizes: { 
                small: 12, 
                normal: 14, 
                medium: 17, 
                large: 21, 
                extraLarge: 26 
            }, 
            fontWeights: { 
                lighter: 200, 
                normal: 400, 
                bolder: 600 
            }, 
            colors: { 
                dark: { 
                    normal: "#333333", 
                    subtle: "#EE333333" 
                }, 
                light: { 
                    normal: "#FFFFFF", 
                    subtle: "#88FFFFFF" 
                }, 
                accent: { 
                    normal: "#2E89FC", 
                    subtle: "#882E89FC"  
                }, 
                attention: { 
                    normal: "#FFD800", 
                    subtle: "#DDFFD800" 
                }, 
                good: { 
                    normal: "#00FF00", 
                    subtle: "#DD00FF00" 
                }, 
                warning: { 
                    normal: "#FF0000", 
                    subtle: "#DDFF0000" 
                } 
            }, 
            imageSizes: { 
                small: 60, 
                medium: 120, 
                large: 180 
            }, 
            actions: { 
                maxActions: 5, 
                separation: { 
                    spacing: 10 
                }, 
                buttonSpacing: 10, 
                showCard: { 
                    actionMode: "inlineEdgeToEdge", 
                    inlineTopMargin: 16, 
                    backgroundColor: "#EFEFEF", 
                    padding: { 
                        top: 16, 
                        right: 16, 
                        bottom: 16, 
                        left: 16 
                    } 
                }, 
                actionsOrientation: "vertical", 
                actionAlignment: "stretch" 
            }, 
            adaptiveCard: { 
                backgroundColor: "#FFFFFF", 
                padding: { 
                    left: 20, 
                    top: 20, 
                    right: 20, 
                    bottom: 20 
                } 
            }, 
            container: { 
                separation: { 
                    spacing: 10 
                }, 
                normal: { 
                }, 
                emphasis: { 
                    backgroundColor: "#EEEEEE", 
                    borderColor: "#AAAAAA", 
                    borderThickness: { 
                        top: 1, 
                        right: 1, 
                        bottom: 1, 
                        left: 1 
                    }, 
                    padding: { 
                        top: 10, 
                        right: 10, 
                        bottom: 10, 
                        left: 10 
                    } 
                } 
            }, 
            textBlock: { 
                color: "dark", 
                separations: { 
                    small: { 
                        spacing: 10, 
                    }, 
                    normal: { 
                        spacing: 10 
                    }, 
                    medium: { 
                        spacing: 10 
                    }, 
                    large: { 
                        spacing: 10 
                    }, 
                    extraLarge: { 
                        spacing: 10 
                    } 
                } 
            }, 
            image: { 
                size: "medium", 
                separation: { 
                    spacing: 10 
                } 
            }, 
            imageSet: { 
                imageSize: "medium", 
                separation: { 
                    spacing: 10 
                } 
            }, 
            factSet: { 
                separation: { 
                    spacing: 10 
                }, 
                title: { 
                    color: "dark", 
                    size: "normal", 
                    isSubtle: false, 
                    weight: "bolder", 
                    wrap: true, 
                    maxWidth: 150, 
                }, 
                value: { 
                    color: "dark", 
                    size: "normal", 
                    isSubtle: false, 
                    weight: "normal", 
                    wrap: true, 
                }, 
                spacing: 10 
            }, 
            input: { 
                separation: { 
                    spacing: 10 
                } 
            }, 
            columnSet: { 
                separation: { 
                    spacing: 10 
                } 
            }, 
            column: { 
                separation: { 
                    spacing: 10 
                } 
            } 
        }; 
    } 
}
