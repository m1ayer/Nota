import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node: any) => {
    const omit = new Set(["assets", "deprecated"])
    return !omit.has(node.displayName.toLowerCase())
  }
});

const config = await loadQuartzConfig()
const layout = await loadQuartzLayout()
export default config; layout
ExternalPlugin.Latex()
