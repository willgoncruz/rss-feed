package portifolio

import (
	"net/http"

	"github.com/angelofallars/htmx-go"
)

func HandlePortifolio() func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		writer := htmx.NewResponse().Refresh(true)
		writer.RenderTempl(r.Context(), w, hello("Will"))
		writer.Write(w)
	}
}
