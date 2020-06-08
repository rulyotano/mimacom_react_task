import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("@material-ui/core/styles/colorManipulator");

configure({ adapter: new Adapter() });
