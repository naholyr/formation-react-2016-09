## Architecture Flux

![](images/flux-schema.png)

* Un dispatcher **global** reçoit les actions
* Les "*stores*" contiennent les données métier
* Le dispatcher les informe des actions
* Le composant se branche sur les stores
