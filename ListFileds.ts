type Modifier = "internal" | "private" | "protected" | "public";
interface FieldCSharp{
    modifier: Modifier
    type: string;
    name: string;
}
type Parameter = {
    type: string;
    name: string;
}
export var fields: FieldCSharp[] = [];
interface MethodCSharp extends FieldCSharp {
    modifier: Modifier
    type: string;
    name: string;
    parameters: Parameter[];
}
export var method: MethodCSharp;
interface PropertyCSharp extends FieldCSharp{
    isGet: boolean;
    isSet: boolean;
}
export var property: PropertyCSharp;