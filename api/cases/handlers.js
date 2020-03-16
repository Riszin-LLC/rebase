const replyHelper = require('../helpers')

module.exports = (server) => {
    function constructCasesResponse(cases) {
        let jsonCases = {
            status: 200,
            message: "Success",
            data: cases
        }
        // return survey
        return jsonCases
    }


    return {
        /**
         * GET /api/cases
         * @param {*} request
         * @param {*} reply
         */
        async ListCase(request, reply){
            server.methods.services.cases.list( (err, result) => {
                if (err) return reply(replyHelper.constructErrorResponse(err)).code(422)
                return reply(
                    constructCasesResponse(result)
                ).code(200)
            })
        },

        /**
         * POST /api/cases
         * @param {*} request
         * @param {*} reply
         */
        async CreateCase(request, reply){
            let payload = request.payload
            server.methods.services.cases.create(payload, (err, result) => {
                if (err) return reply(replyHelper.constructErrorResponse(err)).code(422)
                return reply(
                    constructCasesResponse(result)
                ).code(200)
            })
        },
        
        /**
         * GET /api/cases/{id}
         * @param {*} request
         * @param {*} reply
         */
        async GetCaseDetail(request, reply) {
            let id = request.params.id
            server.methods.services.cases.getById(id, (err, item) => {
                if (err) return reply(replyHelper.constructErrorResponse(err)).code(422)
                return reply(
                    constructCasesResponse(item)
                ).code(200)
            })
        },

        /**
         * GET /api/cases/{id}/history
         * @param {*} request
         * @param {*} reply
         */
        async GetCaseHistory(request, reply) {
            return reply({ result: 'case history!' });
            /*
            server.methods.services.areas.getVillage(
                request.params.district_code,
                (err, districs) => {
                    if (err) return reply(replyHelper.constructErrorResponse(err)).code(422)
                    return reply(
                        constructCasesResponse(districs)
                    ).code(200)
                }
            )
            */
        },
        
        /**
         * PUT /api/cases/{id}
         * @param {*} request
         * @param {*} reply
         */
        async UpdateCase(request, reply){
            let payload = request.payload
            server.methods.services.cases.update(payload, (err, result) => {
                if (err) return reply(replyHelper.constructErrorResponse(err)).code(422)
                return reply(
                    constructCasesResponse(result)
                ).code(200)
            })
        },
        
        /**
         * DELETE /api/cases/{id}
         * @param {*} request
         * @param {*} reply
         */
        async DeleteCase(request, reply){
            return reply({ result: 'update case!' });
        }

    }//end

}
