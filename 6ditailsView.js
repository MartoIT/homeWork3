
import {detailsTamplete} from '../HTMLTamplets/detailsTamplet.js'


export async function detailsView(ctx) {
  
  ctx.render(detailsTamplete())
}