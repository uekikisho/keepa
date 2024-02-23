interface propType {
    title: any;
    bgColor?: string;
    onSelect?: Function;
    collapsable?: boolean;
    onCollapse?: Function;
    contentDivId: string;
    children?: any;
    contentDivClassName?: string;
    contentDivStyle?: any;
    className?: string;
}

export default function LeftPanelBox({ 
    title, bgColor, onSelect, collapsable, 
    onCollapse, contentDivId, children,
    contentDivClassName, contentDivStyle,
    className
}: propType) {

    return <div className={`leftPanelBox ${className}`} style={{ backgroundColor: bgColor }}>
        <div className="leftPanelLabel">{title}</div>
        <div id={contentDivId} className={contentDivClassName} style={contentDivStyle}>
            {children}
        </div>
    </div>
}